import { createSlice, current } from '@reduxjs/toolkit';
import { ContactDataObjectTypes } from '../../containers/Contact/contact.types'



export interface ContactStateType {
    data: ContactDataObjectTypes[]
}

const contactReducer = createSlice({
    name: 'contact',

    initialState: {
        data: [
            {
                id: 0,
                icon: "📧",
                link: "mailto: simuratli@gmail.com",
                text: "simuratli.com",
            },
            {
                id: 1,
                icon: "🖥️",
                link: "https://github.com/simuratli",
                text: "Github.com",
            },
            {
                id: 2,
                icon: "🐦",
                link: "https://twitter.com/Simuratli1",
                text: "Twitter.com",
            },
            {
                id: 3,
                icon: "📱",
                link: "tel:+99450826906",
                text: "+994508269067",
            },
            {
                id: 4,
                icon: "🔗",
                link: "https://www.linkedin.com/in/simuratli",
                text: "Linkedin.com",
            },
            {
                id: 5,
                icon: "✉️",
                link: "https://www.linkedin.com/in/simuratli",
                text: "Telegram",
            },
            {
                id: 6,
                icon: "📘",
                link: "https://medium.com/@simuratli",
                text: "Medium.com",
            },
        ]
    } as ContactStateType,

    reducers: {
        setContact: (state: ContactStateType, action) => {
            state.data = action.payload
        },
        setChangeValueOfContact: (state: ContactStateType, action) => {
            const prevState = current(state);
            const updatedState = prevState.data.map((contact) => {
                if (action.payload.id === contact.id) {
                    return {
                        ...contact,
                        [action.payload.name]: action.payload.value
                    }
                } else {
                    return contact
                }
            })

            state.data = updatedState
        },
        setAddNewContact: (state: ContactStateType) => {
            const prevState = current(state);

            const updatedState = {
                data: [
                    {
                        id: prevState.data.length + 1,
                        icon: 'Edit contact icon',
                        link: 'Edit contact link',
                        text: "Edit contact text"
                    },
                    ...prevState.data
                ]
            }

            state.data = updatedState.data
        },
    }
})

export const { setContact, setChangeValueOfContact, setAddNewContact } = contactReducer.actions;
export default contactReducer.reducer;