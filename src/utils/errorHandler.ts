export const uncaughtExceptionHandler: NodeJS.UncaughtExceptionListener = (error) => {
  console.error(error);
  process.exit(1);
}


export const unhandledRejectionHandler:NodeJS.UnhandledRejectionListener = (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason: ', reason);
  // Application specific logging, throwing an error, or other logic here
}