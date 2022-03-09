import React, { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);

    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        /* SETTING MEETUPS TO FIREBASE */
        fetch('https://react-checker-default-rtdb.firebaseio.com/meetups.json',
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const meetups = [];

                for (let key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    };
                    meetups.push(meetup);
                }

                setIsLoading(false);
                setLoadedMeetups(meetups);
            });
    }, [/*for external dependencies */]);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );    
    }

    return (
        <section>
            <h1>All Meetups Locations</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    );
}

export default AllMeetupsPage;
