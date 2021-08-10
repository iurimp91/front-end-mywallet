export default function createConfigAndBody(object) {
	const { user, localUser, value, description, type } = object;

	const config = {
		headers: { Authorization: `Bearer ${user.token || localUser.token}` },
	};
	const centsValue = value * 100;
	const body = { value: centsValue, description, type };

	return { config, body };
}