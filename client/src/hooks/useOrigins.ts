import { useQuery, useMutation } from "@tanstack/react-query";
import { useAccount } from "wagmi";
import { queryClient, apiRequest } from "@/lib/queryClient";
import type { Origin } from "@shared/schema";

export function useOrigins() {
  const { address } = useAccount();

  return useQuery<Origin[]>({
    queryKey: ['/api/origins/owner', address],
    queryFn: async () => {
      if (!address) return [];
      const response = await fetch(`/api/origins/owner/${address}`);
      if (!response.ok) {
        if (response.status === 404) return [];
        throw new Error('Failed to fetch origins');
      }
      return response.json();
    },
    enabled: !!address,
  });
}

export function useCreateOrigin() {
  const { address } = useAccount();

  return useMutation({
    mutationFn: async (domain: string) => {
      if (!address) throw new Error("Wallet not connected");
      
      console.log('[Frontend] Creating origin:', { domain, address });
      const response = await apiRequest("POST", "/api/origins", {
        domain,
        ownerAddress: address,
      });
      
      const data = await response.json();
      console.log('[Frontend] Origin created:', data);
      return data;
    },
    onSuccess: () => {
      // Invalidate all origins queries
      queryClient.invalidateQueries({ queryKey: ['/api/origins/owner'] });
    },
    onError: (error) => {
      console.error('[Frontend] Create origin failed:', error);
    },
  });
}

export function useOriginKey(originId?: string) {
  return useQuery({
    queryKey: ['/api/keys', originId, 'current'],
    queryFn: async () => {
      if (!originId) return null;
      const response = await fetch(`/api/keys/${originId}/current`);
      if (!response.ok) throw new Error('Failed to fetch key');
      return response.json();
    },
    enabled: !!originId,
  });
}
