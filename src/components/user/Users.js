import React, {useState} from 'react';


function Users() {
    const [form, setForm] = useState({
        name: "",
        lastName: "",
        patronymic: "",

    })



    const changeInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    }

    const submit = (e) => {
        e.preventDefault()
        setForm({
            name: "",
            lastName: "",
            patronymic: "",


        })
alert("данные успешно отправлены");
        console.log(form)
    }



    return (
        <div>
            <form onSubmit={submit}>
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    value={form.name}
                    onChange={changeInput}
                />
                <input
                    type="text"
                    placeholder="lastName"
                    name="lastName"
                    value={form.lastName}
                    onChange={changeInput}
                />
                <input
                    type="text"
                    placeholder="patronymic"
                    name="patronymic"
                    value={form.patronymic}
                    onChange={changeInput}
                />


                <button type="submit" >submit</button>

            </form>

        </div>
    );
}

export default Users;