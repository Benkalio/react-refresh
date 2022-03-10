import { useNavigate } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const history = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-checker-default-rtdb.firebaseio.com/meetups.json',
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then(() => {
            history.replace('/');
        });
    }
    return (
        <section>
            <h1>New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetupPage;
