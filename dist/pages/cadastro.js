const frutaForm = document.getElementById("frutaForm");
frutaForm === null || frutaForm === void 0 ? void 0 : frutaForm.addEventListener("submit", (event) => {
    var _a;
    event.preventDefault();
    console.log(event);
    const target = event.target;
    // console.log(target?.elements["imagem"].value);
    // console.log(target?.elements["descricao"].value);
    // console.log(target?.elements["preco"].value);
    const frutaArray = JSON.parse((_a = localStorage.getItem("frutaArray")) !== null && _a !== void 0 ? _a : "[]");
    frutaArray.push({
        imagem: target === null || target === void 0 ? void 0 : target.elements["imagem"].value,
        descricao: target === null || target === void 0 ? void 0 : target.elements["descricao"].value,
        preco: target === null || target === void 0 ? void 0 : target.elements["preco"].value
    });
    localStorage.setItem("frutaArray", JSON.stringify(frutaArray));
    frutaForm.reset();
});
export {};
