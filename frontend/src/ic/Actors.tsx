import {
  ActorProvider,
  createActorContext,
  createUseActorHook,
} from "ic-use-actor";
import { _SERVICE } from "declarations/backend/backend.did";
import { canisterId, idlFactory } from "declarations/backend";
import { useInternetIdentity } from "ic-use-internet-identity";

const actorContext = createActorContext<_SERVICE>();
export const useActor = createUseActorHook<_SERVICE>(actorContext);

export default function Actors({ children }: { children: React.ReactNode }) {
  const { identity } = useInternetIdentity();

  return (
    <ActorProvider<_SERVICE>
      canisterId={canisterId}
      context={actorContext}
      identity={identity}
      idlFactory={idlFactory}
    >
      {children}
    </ActorProvider>
  );
}
