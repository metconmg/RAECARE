import { crossDepartmentWorkflows, departmentalArchitecture } from '../../core/departmentalArchitecture';

export function DepartmentalArchitectureSummary() {
  return (
    <section className="departmental-summary" aria-label="Departmental architecture index">
      <header>
        <p className="eyebrow">Departmental Index</p>
        <h2>Caregiver Platform Departmental Architecture</h2>
        <p>
          Numbered ownership map for product, compliance, engineering, finance, QA, and their cross-department workflows.
        </p>
      </header>

      <div className="department-grid">
        {departmentalArchitecture.map((department) => (
          <article className="panel" key={department.deptId}>
            <p className="node-id">{department.deptId}</p>
            <h3>{department.department}</h3>
            <ul className="compact-list">
              {department.functions.map((item) => (
                <li key={item.subId}>
                  <strong>{item.subId} {item.title}:</strong> {item.responsibility}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <article className="panel workflow-panel">
        <h3>Cross-Departmental Workflows</h3>
        <ul className="compact-list">
          {crossDepartmentWorkflows.map((workflow) => (
            <li key={workflow.workflowId}>
              <strong>{workflow.workflowId} {workflow.systemEvent}:</strong> Dept {workflow.initiatingDept} initiates with support from {workflow.supportingDepts.join(', ')}. {workflow.connectedArchitecturalOutcome}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
