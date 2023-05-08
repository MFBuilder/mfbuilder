-- CreateTable
CREATE TABLE "Workspace" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Workspace_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccountSchema" (
    "id" SERIAL NOT NULL,
    "schema" JSONB NOT NULL,
    "workspaceId" INTEGER NOT NULL,

    CONSTRAINT "AccountSchema_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "schemaId" INTEGER NOT NULL,
    "data" JSONB NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkspaceAccount" (
    "id" SERIAL NOT NULL,
    "accountId" INTEGER NOT NULL,
    "workspaceId" INTEGER NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "WorkspaceAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DataRecordSchema" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "schema" JSONB NOT NULL,
    "workspaceId" INTEGER NOT NULL,

    CONSTRAINT "DataRecordSchema_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DataRecord" (
    "id" SERIAL NOT NULL,
    "schemaId" INTEGER NOT NULL,
    "data" JSONB NOT NULL,

    CONSTRAINT "DataRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Channel" (
    "id" SERIAL NOT NULL,
    "kind" TEXT NOT NULL,
    "workspaceId" INTEGER NOT NULL,
    "configuration" JSONB NOT NULL,

    CONSTRAINT "Channel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccountChannel" (
    "id" SERIAL NOT NULL,
    "accountId" INTEGER NOT NULL,
    "channelId" INTEGER NOT NULL,
    "channelAccountId" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "data" JSONB NOT NULL,

    CONSTRAINT "AccountChannel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FlowGroup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "workspaceId" INTEGER NOT NULL,

    CONSTRAINT "FlowGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flow" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "flowGroupId" INTEGER NOT NULL,
    "contextSchema" JSONB NOT NULL,

    CONSTRAINT "Flow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FlowAction" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "flowId" INTEGER NOT NULL,
    "configuration" JSONB NOT NULL,

    CONSTRAINT "FlowAction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FlowActionConnection" (
    "id" SERIAL NOT NULL,
    "flowId" INTEGER NOT NULL,
    "fromId" INTEGER NOT NULL,
    "toId" INTEGER NOT NULL,
    "socket" TEXT NOT NULL,

    CONSTRAINT "FlowActionConnection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FlowStack" (
    "id" SERIAL NOT NULL,
    "flowId" INTEGER NOT NULL,
    "parentId" INTEGER,
    "accountChannelId" INTEGER NOT NULL,
    "context" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FlowStack_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FlowState" (
    "id" SERIAL NOT NULL,
    "flowStackId" INTEGER NOT NULL,
    "flowActionId" INTEGER NOT NULL,
    "state" JSONB NOT NULL,
    "channelState" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FlowState_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AccountSchema" ADD CONSTRAINT "AccountSchema_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_schemaId_fkey" FOREIGN KEY ("schemaId") REFERENCES "AccountSchema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkspaceAccount" ADD CONSTRAINT "WorkspaceAccount_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkspaceAccount" ADD CONSTRAINT "WorkspaceAccount_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DataRecordSchema" ADD CONSTRAINT "DataRecordSchema_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DataRecord" ADD CONSTRAINT "DataRecord_schemaId_fkey" FOREIGN KEY ("schemaId") REFERENCES "DataRecordSchema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Channel" ADD CONSTRAINT "Channel_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountChannel" ADD CONSTRAINT "AccountChannel_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountChannel" ADD CONSTRAINT "AccountChannel_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowGroup" ADD CONSTRAINT "FlowGroup_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspace"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flow" ADD CONSTRAINT "Flow_flowGroupId_fkey" FOREIGN KEY ("flowGroupId") REFERENCES "FlowGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowAction" ADD CONSTRAINT "FlowAction_flowId_fkey" FOREIGN KEY ("flowId") REFERENCES "Flow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowActionConnection" ADD CONSTRAINT "FlowActionConnection_flowId_fkey" FOREIGN KEY ("flowId") REFERENCES "Flow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowActionConnection" ADD CONSTRAINT "FlowActionConnection_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "FlowAction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowActionConnection" ADD CONSTRAINT "FlowActionConnection_toId_fkey" FOREIGN KEY ("toId") REFERENCES "FlowAction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowStack" ADD CONSTRAINT "FlowStack_flowId_fkey" FOREIGN KEY ("flowId") REFERENCES "Flow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowStack" ADD CONSTRAINT "FlowStack_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "FlowStack"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowStack" ADD CONSTRAINT "FlowStack_accountChannelId_fkey" FOREIGN KEY ("accountChannelId") REFERENCES "AccountChannel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowState" ADD CONSTRAINT "FlowState_flowStackId_fkey" FOREIGN KEY ("flowStackId") REFERENCES "FlowStack"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FlowState" ADD CONSTRAINT "FlowState_flowActionId_fkey" FOREIGN KEY ("flowActionId") REFERENCES "FlowAction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
