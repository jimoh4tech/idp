export const throwError = (error: unknown) => {
	let errorMessage = 'Something went wrong. ';
	if (error instanceof Error) errorMessage += `Error: ${error.message}`;
	return errorMessage;
};
