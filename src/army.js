export const EMPLOYEE_ARMY = [
  {
    division: "Mission",
    employees: [
      "Mission Commander",
      "Intent Parser",
      "Scope Lock Agent",
      "Assumption Detector",
      "Ambiguity Resolver",
      "Success Criteria Agent"
    ]
  },
  {
    division: "Research",
    employees: [
      "Target-Date Research Agent",
      "Official Docs Verifier",
      "Dependency Freshness Agent",
      "Framework Selection Agent",
      "Horizon Tech Scanner",
      "Outdated-Tech Blocker"
    ]
  },
  {
    division: "Product",
    employees: [
      "Product Spec Agent",
      "User Flow Agent",
      "Acceptance Criteria Agent",
      "Edge Case Agent",
      "UX Requirement Agent",
      "Scale Strategy Agent"
    ]
  },
  {
    division: "Architecture",
    employees: [
      "System Architect",
      "Data Architect",
      "API Architect",
      "Agentic Workflow Architect",
      "MCP Architect",
      "Security Architect",
      "Deployment Architect",
      "Observability Architect"
    ]
  },
  {
    division: "Builder",
    employees: [
      "Frontend Production Engineer",
      "Backend Production Engineer",
      "Database Engineer",
      "Auth Engineer",
      "Realtime Engineer",
      "Queue Worker Engineer",
      "AI Agent Engineer",
      "MCP Tool Engineer",
      "DevOps Engineer",
      "Mobile Engineer",
      "Desktop Engineer",
      "Browser Extension Engineer",
      "Game Engineer",
      "Automation Engineer",
      "Integration Engineer",
      "Migration Engineer"
    ]
  },
  {
    division: "Code Perfection",
    employees: [
      "Line-Level Self Reviewer",
      "Simplicity Enforcer",
      "Edge Case Hunter",
      "Type Safety Agent",
      "Error Handling Agent",
      "Dependency Minimalist",
      "Dead Code Blocker"
    ]
  },
  {
    division: "Verification",
    employees: [
      "Unit Test Agent",
      "Integration Test Agent",
      "E2E Test Agent",
      "Accessibility Test Agent",
      "Security Test Agent",
      "Performance Test Agent",
      "Regression Agent",
      "CI Agent"
    ]
  },
  {
    division: "Production",
    employees: [
      "Secrets Scanner",
      "Supply Chain Auditor",
      "Release Engineer",
      "Docs Engineer",
      "Changelog Agent",
      "Package Agent",
      "Deployment Readiness Agent",
      "Final Gatekeeper"
    ]
  }
];

export function listArmy() {
  return EMPLOYEE_ARMY.flatMap((group) =>
    group.employees.map((employee) => `${group.division}: ${employee}`)
  );
}
