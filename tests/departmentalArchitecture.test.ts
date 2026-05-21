import { describe, expect, it } from 'vitest';
import { crossDepartmentWorkflows, departmentalArchitecture } from '../src/core/departmentalArchitecture';

describe('departmental architecture contract', () => {
  it('preserves the five core departments in numbered order', () => {
    expect(departmentalArchitecture.map((dept) => dept.deptId)).toEqual(['1.0', '2.0', '3.0', '4.0', '5.0']);
  });

  it('keeps each department scoped to exactly three sub-functions', () => {
    for (const department of departmentalArchitecture) {
      expect(department.functions).toHaveLength(3);
    }
  });

  it('preserves the cross-department workflow index', () => {
    expect(crossDepartmentWorkflows.map((workflow) => workflow.workflowId)).toEqual(['6.1', '6.2', '6.3', '6.4', '6.5']);
  });

  it('keeps therapist contact routed through product, data, and operations', () => {
    const therapistContact = crossDepartmentWorkflows.find((workflow) => workflow.workflowId === '6.3');
    expect(therapistContact?.initiatingDept).toBe('1.0');
    expect(therapistContact?.supportingDepts).toEqual(['3.0', '2.0']);
    expect(therapistContact?.connectedArchitecturalOutcome).toContain('no clinical chat');
  });

  it('keeps verification connected to finance compensation routing', () => {
    const tierVerification = crossDepartmentWorkflows.find((workflow) => workflow.workflowId === '6.2');
    expect(tierVerification?.initiatingDept).toBe('2.0');
    expect(tierVerification?.supportingDepts).toEqual(['4.0']);
    expect(tierVerification?.connectedArchitecturalOutcome).toContain('compensation tier');
  });
});
