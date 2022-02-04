fs.rm(
  '/home/runner/_work',
  {
    force: true,
    recursive: true,
  },
  (err) => {
    if (err) {
      throw err;
    }
    console.log('Working directory successfully removed');
  }
);
