export default function handleError(error, history) {
	if (error.response.status === 401) {
		localStorage.removeItem("user");
		alert(
			"Você foi desligado pelo servidor, por favor, faça login novamente."
		);
		history.push("/");
	} else if (error.response.status === 400) {
		alert(
			"Utilize no máximo 30 caracteres na descrição."
		);
	} else {
		alert(
			"Algo deu errado com sua requisição, por favor, tente novamente."
		);
	}
}