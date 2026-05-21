interface SyncStatusProps {
  txnId: string;
}

export function SyncStatus({ txnId }: SyncStatusProps) {
  return (
    <div className="sync-status" aria-label="handoff sync status">
      <span>txn</span>
      <strong>{txnId}</strong>
    </div>
  );
}
