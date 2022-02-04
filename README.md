# Clean working directory

This action deletes `/home/runner/_work` on the `Post Run action` (after all jobs are done).

### Disclaimer

This repository is first of all for personal use. If the repository is not fully suitable for you for any reason, it is recommended to make a fork. The source files are pretty simple.

### Cautions

Before using this action, please make sure, that your worker has the same working directory.

This github action will delete files, so firstly, please check out the `post.js` file.

## Example usage

```yml
jobs:
  hello:
    runs-on: self-hosted
    steps:
      # the removing of the working directory will be done after the other jobs are finished
      - uses: edk55/clean-working-directory@main
      # other jobs go here...
      - run: echo 'Hello world!'
```
