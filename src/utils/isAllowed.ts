export const isAllowed = (allowedModulesOrSubmodule: number[], moduleOrSubmoduleId: number) => {
  return allowedModulesOrSubmodule.includes(moduleOrSubmoduleId);
};
