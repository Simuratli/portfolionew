import { createSlice, current } from '@reduxjs/toolkit';
import { ContactDataObjectTypes } from '../../containers/Contact/contact.types'



export interface ContactStateType {
    data: ContactDataObjectTypes[]
}

const contactReducer = createSlice({
    name: 'contact',

    initialState: {
        data: []
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

        setRemoveContact: (state: ContactStateType, action) => {
            const prevState = current(state);

            const updatedState = {
                data: prevState.data.filter((contact) => contact.id !== action.payload)
            }

            state.data = updatedState.data
        },
    }
})

export const { setContact, setChangeValueOfContact, setAddNewContact, setRemoveContact } = contactReducer.actions;
export default contactReducer.reducer;