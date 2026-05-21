export type DepartmentId = '1.0' | '2.0' | '3.0' | '4.0' | '5.0';
export type WorkflowId = '6.1' | '6.2' | '6.3' | '6.4' | '6.5';

export interface DepartmentSubFunction {
  subId: string;
  title: string;
  responsibility: string;
}

export interface DepartmentArchitectureEntry {
  deptId: DepartmentId;
  department: string;
  functions: DepartmentSubFunction[];
}

export interface CrossDepartmentWorkflow {
  workflowId: WorkflowId;
  systemEvent: string;
  initiatingDept: DepartmentId;
  supportingDepts: DepartmentId[];
  connectedArchitecturalOutcome: string;
}

export const departmentalArchitecture: DepartmentArchitectureEntry[] = [
  {
    deptId: '1.0',
    department: 'Product & UX',
    functions: [
      {
        subId: '1.1',
        title: 'Platform Experience & Discovery',
        responsibility: 'Manages a Bumble-style matchmaking paradigm initiated by clients.',
      },
      {
        subId: '1.2',
        title: 'Trial Architecture',
        responsibility: 'Executes a 30-day free trial structure with progressive AI-assisted connection unlocks.',
      },
      {
        subId: '1.3',
        title: 'Therapist Contact UX',
        responsibility: 'Enforces a strict, one-way structured relay form for therapist contact with no free text.',
      },
    ],
  },
  {
    deptId: '2.0',
    department: 'Operations & Compliance',
    functions: [
      {
        subId: '2.1',
        title: 'Liability Scoping',
        responsibility: 'Maintains platform liability scoped strictly to matchmaking and system stewardship.',
      },
      {
        subId: '2.2',
        title: 'Regulatory Posture',
        responsibility: 'Ensures alignment with Michigan Department of Health & Human Services (MDHHS) guidelines.',
      },
      {
        subId: '2.3',
        title: 'Verification Management',
        responsibility: 'Manages Mirrorbox for baseline screening and official/third-party channels for credentialing.',
      },
    ],
  },
  {
    deptId: '3.0',
    department: 'Engineering & Data',
    functions: [
      {
        subId: '3.1',
        title: 'Knowledge Graph',
        responsibility: 'Builds and manages the graph to track relationships, lineage, and trust signals.',
      },
      {
        subId: '3.2',
        title: 'Profile Rendering',
        responsibility: 'Renders caregiver profiles as an immersive network of nodes rather than flat data statistics.',
      },
      {
        subId: '3.3',
        title: 'Relay Security',
        responsibility: 'Secures therapist relay infrastructure via data encryption and strict minimization.',
      },
    ],
  },
  {
    deptId: '4.0',
    department: 'Finance & Revenue',
    functions: [
      {
        subId: '4.1',
        title: 'Monetization Logic',
        responsibility: 'Operates a low-cost volume model utilizing client access fees and tiered subscriptions.',
      },
      {
        subId: '4.2',
        title: 'Compensation Routing',
        responsibility: 'Enforces rules anchoring caregiver compensation expectations strictly to their verified credential tier.',
      },
      {
        subId: '4.3',
        title: 'Subsidy Integration',
        responsibility: 'Integrates institutional sponsorships to subsidize platform costs and keep end-user pricing low.',
      },
    ],
  },
  {
    deptId: '5.0',
    department: 'QA & Simulation',
    functions: [
      {
        subId: '5.1',
        title: 'Automated Validation',
        responsibility: 'Deploys an Agentic Scenario Tester to traverse all user experience branches.',
      },
      {
        subId: '5.2',
        title: 'Diagnostic Mapping',
        responsibility: 'Identifies architectural weak points, mapping dead ends, logic conflicts, and unsafe branches.',
      },
      {
        subId: '5.3',
        title: 'Iterative Reporting',
        responsibility: 'Generates structured traversal reports for iterative system repair.',
      },
    ],
  },
];

export const crossDepartmentWorkflows: CrossDepartmentWorkflow[] = [
  {
    workflowId: '6.1',
    systemEvent: 'User Intake',
    initiatingDept: '1.0',
    supportingDepts: ['3.0'],
    connectedArchitecturalOutcome: 'Clients complete a short, structured questionnaire without blocking browsing; system assigns an anonymized ID.',
  },
  {
    workflowId: '6.2',
    systemEvent: 'Tier Verification',
    initiatingDept: '2.0',
    supportingDepts: ['4.0'],
    connectedArchitecturalOutcome: 'Operations validates credentials against state records; Finance simultaneously unlocks the corresponding compensation tier.',
  },
  {
    workflowId: '6.3',
    systemEvent: 'Therapist Contact',
    initiatingDept: '1.0',
    supportingDepts: ['3.0', '2.0'],
    connectedArchitecturalOutcome: 'Client utilizes the boolean/dropdown relay form; Engineering encrypts the payload; Operations ensures no clinical chat occurs on-platform.',
  },
  {
    workflowId: '6.4',
    systemEvent: 'Abuse Detection',
    initiatingDept: '3.0',
    supportingDepts: ['1.0'],
    connectedArchitecturalOutcome: 'Tracking systems flag extractive browsing behavior; Product dynamically increases friction and restricts candidate visibility.',
  },
  {
    workflowId: '6.5',
    systemEvent: 'Architecture Update',
    initiatingDept: '5.0',
    supportingDepts: ['3.0'],
    connectedArchitecturalOutcome: 'QA initiates a depth-first traversal of the user journey; Engineering receives an aggregated output report detailing required fixes.',
  },
];
