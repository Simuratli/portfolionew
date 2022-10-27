import { createSlice, current } from '@reduxjs/toolkit';
export interface ExperienceDataObjectType {
    id: number;
    title: string;
    company: string;
    placeAndTime: string;
    description: string;
}

export interface ExperienceStateType {
    data: ExperienceDataObjectType[]
}

const experienceReducer = createSlice({
    name: "experience",

    initialState: {
        data: [
            {
                id: 0,
                title: "Frontend (React) developer",
                company: "UDS Systems",
                placeAndTime: "Ukraine, Kiev - (02/08/2021 - present)",
                description: "As a react developer in UDS Systems company, we develop different Tools for MS Dynamics. Until today I had created 4 tools from  start to end and I gave support to the 2 different tools. Currently, I am working on a new Tool for Dynamics. These tools which I create  are Migration Calculator, Storage Analyzer, and Busines Data Masking Tool. which I support License Calculator. Data Migration Tool.  We deploy These tools successfully to the App Store of MS Dynamics"
            },
            {
                id: 1,
                title: "Frontend developer",
                company: "Pragmatech",
                placeAndTime: "Azerbaijan, Baku - (05/06/2019 - 04/01/2020)",
                description: "Here I have mainly developed e-commerce projects and made support for available apps. And also teach students how to become a front-end developer."
            },
            {
                id: 2,
                title: "Frontend developer",
                company: "Freelance",
                placeAndTime: "Azerbaijan, Baku - (20/11/2018 - 12/02/2019)",
                description: "When I work freelance in Baku I made different websites for different costumers. For example, I made a website for a big ship company in   Baku Techmarine LTD. And also I have side projects for the Data Development course called DataStat and I made a website for big Wallpaper  holding a TVB group."
            },
        ]
    } as ExperienceStateType,

    reducers: {
        setExperience: (state: ExperienceStateType, action) => {
            state.data = action.payload
        },
        setAddNewExperience: (state: ExperienceStateType) => {
            const currentState = current(state);
            const updatedState = {
                data: [
                    {
                        id: currentState.data.length + 1,
                        title: "Edit title",
                        company: "Edit company",
                        placeAndTime: "Edit place and time",
                        description: "Edit description"
                    },
                    ...currentState.data
                ]
            }
            state.data = updatedState.data
        },
        setChangeExperienceValue: (state: ExperienceStateType, action) => {
            const currentState = current(state);

            const newState: ExperienceDataObjectType[] = currentState.data.map((exp) => {
                if (action.payload.id === exp.id) {
                    return {
                        ...exp,
                        [action.payload.name]: action.payload.value
                    }
                } else {
                    return exp
                }
            })
            state.data = newState
        },
    }
})

export const { setExperience, setAddNewExperience, setChangeExperienceValue } = experienceReducer.actions;
export default experienceReducer.reducer