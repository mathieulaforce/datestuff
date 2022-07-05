import React, { useEffect, useState } from "react";
import { RandomPeopleApi } from "./api/randomPeople.api";
import { Person } from "./types/x";

const People: React.FC = () => {
    const [people, setPeople] = useState<Person[]>();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await RandomPeopleApi.getList();
                setPeople(response)
            } catch (e) {
                console.error(e);
                alert("error");
            }
        };
        fetchData();
    }, []);

    {
        if (!people) {
            return <>Loading...</>;
        }
    }


    return <>
        <div className="people-container">
            {people?.map(person => {
                return <div>
                    <div>
                        <b>name:</b> {person.name.first}  {person.name.last}
                    </div>
                    <div>
                        <b>moment type dob:</b>   {person.dob.date.toISOString()}
                    </div>
                    <div>
                        <b>regular date:</b> {person.registered.date.toISOString()}
                    </div>
                </div>
            })}
        </div>
    </>
}

export default People;