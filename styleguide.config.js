module.exports = {
  // This is to include semantic-ui CSS in the styleguidist
  require: ["semantic-ui-css/semantic.min.css"],
  compilerConfig: {
    transforms: { dangerousTaggedTemplateString: true } //This to support styled-components in example Markdowns
  }
};
