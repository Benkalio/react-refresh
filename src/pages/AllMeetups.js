import React, { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    const DUMMY_DATA = [
        {
          id: 'm1',
          title: 'This is a first meetup',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
          address: 'Meetupstreet 5, 12345 Meetup City',
          description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
        },
        {
          id: 'm2',
          title: 'This is a second meetup',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
          address: 'Meetupstreet 5, 12345 Meetup City',
          description:
            'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
        },
    ];
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
            <MeetupList meetups={DUMMY_DATA} />
        </section>
    );
}

export default AllMeetupsPage;
