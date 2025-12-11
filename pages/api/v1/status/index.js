function status(request, response) {
  response.status(200).json({ chave: "maçã" });
}

export default status;
