import { App, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as l2 from "../../../src";

const mockApp = new App();
const stack = new Stack(mockApp);

test("create project with minimal required properties", () => {
  new l2.Project(stack, "TestProject", {
    orgId: "mock",
    profile: "default",
  });

  const t = Template.fromStack(stack);
  t.hasResourceProperties("MongoDB::Atlas::Project", {
    Name: "projectTestProject",
    OrgId: "mock",
    Profile: "default",
  });
});

test("allow to use an existing project", () => {
  const existingProject = l2.Project.fromProjectAttributes(
    stack,
    "ExistingProject",
    {
      projectId: "mock-id",
      projectName: "mock-name",
      projectOwnerId: "mock-owner-id",
    }
  );
  expect(existingProject.projectId).toBe("mock-id");
  expect(existingProject.projectName).toBe("mock-name");
  expect(existingProject.projectOwnerId).toBe("mock-owner-id");
});
