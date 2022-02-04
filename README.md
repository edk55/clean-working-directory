# Clear working directory

This github action will delete files, so firstly, please check out the `post.js` file.

This action deletes `/home/runner/_work` on the `Post Run action` (after all jobs are done).

## Example usage

```yml
jobs:
  hello:
    runs-on: self-hosted
    steps:
      # the deletion of the working directory will be done after the other jobs are finished
      - uses: edk55/clean-working-directory@v1
      # other jobs go here...
      - run: ls /home/runner/_work
```
