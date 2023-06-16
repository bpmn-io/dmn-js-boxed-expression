export type Decision = {
  decisionLogic?: Expression
}

export type Expression = LiteralExpression | Invocation | UnaryTests;

export type BKM = {
  encapsulatedLogic?: FunctionDefinition
}

export type FunctionDefinition = Expression;

export type LiteralExpression = {
  text?: string
}

export type Invocation = {
  calledFunction: Expression
};

export type UnaryTests = {
  text?: string
};

