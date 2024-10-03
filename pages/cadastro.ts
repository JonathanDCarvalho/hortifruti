import IFruta from "../models/fruta";

const frutaForm: HTMLFormElement | null = (document.getElementById("frutaForm") as HTMLFormElement);

frutaForm?.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault();
    console.log(event);

    const target = (event.target as any);
    // console.log(target?.elements["imagem"].value);
    // console.log(target?.elements["descricao"].value);
    // console.log(target?.elements["preco"].value);

    const frutaArray: Array<IFruta> = JSON.parse(localStorage.getItem("frutaArray")?? "[]");

    frutaArray.push({
        imagem: target?.elements["imagem"].value,
        descricao: target?.elements["descricao"].value,
        preco: target?.elements["preco"].value
    });

    localStorage.setItem("frutaArray", JSON.stringify(frutaArray));

    frutaForm.reset();
});