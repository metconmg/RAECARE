import { NetworkCanvas } from './canvas/NetworkCanvas';
import { Inspector } from './components/Inspector/Inspector';
import { SyncStatus } from './stages/shared/SyncStatus';
import { nodeDatabase } from './core/data';

export default function App() {
  const activeNode = nodeDatabase[0];

  return (
    <main className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Trusted Support Network Marketplace & Ecosystem</p>
          <h1>RAECARE Operations Topology</h1>
        </div>
        <SyncStatus txnId="raecare-repo-20260519-03" />
      </header>

      <section className="workspace-grid">
        <NetworkCanvas nodes={nodeDatabase} />
        <Inspector node={activeNode} />
      </section>
    </main>
  );
}
