export function getServerPortToConfigure() {
	const { SERVER_PORT = 3000 } = process.env;

	const port = Math.floor(Number(SERVER_PORT));

	if (isNaN(port)) {
		return 0;
	}

	return port;
}
