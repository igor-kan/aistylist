# Code Owners for aistylist

This file defines code owners for automatic review requests on pull requests.

## How it Works

When a pull request is opened that modifies files covered by this CODEOWNERS file:
1. GitHub automatically requests reviews from the designated owners
2. The PR cannot be merged until required reviews are approved
3. Code owners are notified of changes to their areas of responsibility

## Current Owners

- **@igor-kan**: Repository maintainer and primary code owner
  - Responsible for all code changes, configuration updates, and releases
  - Final approval authority for all pull requests

## File Patterns

The CODEOWNERS file uses glob patterns to match files:
- `*`: Matches all files (global owner)
- `*.js`: Matches all JavaScript files
- `package.json`: Matches specific configuration files
- `docs/`: Matches entire directories

## Guidelines

### For Contributors
1. Ensure your PR is ready for review before opening
2. Address feedback promptly and professionally  
3. Keep changes focused and well-documented
4. Follow the project's coding standards and conventions

### For Code Owners
1. Review PRs promptly (within 24-48 hours when possible)
2. Provide constructive, actionable feedback
3. Focus on code quality, security, and maintainability
4. Approve when changes meet project standards

## Updating Code Owners

To modify code ownership:
1. Edit the [CODEOWNERS](CODEOWNERS) file
2. Test patterns using GitHub's CODEOWNERS syntax
3. Submit a PR with the changes (requires owner approval)
4. Update this documentation if ownership structure changes

## References

- [GitHub CODEOWNERS Documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
- [CODEOWNERS Syntax](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners#codeowners-syntax)
