import React from 'react';
import {  Modal } from 'semantic-ui-react';

export default function YouTubeVideoModal(props){

    let [open_modal, setOpenModal] = React.useState(false);
    return (
        <>
            <Modal
                onClose={() => setOpenModal(false)}
                onOpen={() => setOpenModal(true)}
                open={props.trigger_modal}
                id="video_modal"
                >
                <Modal.Content>
                    <iframe title="Video Player" src={ "https://www.youtube.com/embed/QHnrVThN0nE" } />
                    <Modal.Description>
                    <h2>Default Profile Image</h2>
                    <p>
                        We've found the following gravatar image associated with your e-mail
                        address.
                    </p>
                    </Modal.Description>
                </Modal.Content>

            </Modal>           
        </>
    )
}

