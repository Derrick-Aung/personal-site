import React, { Component } from 'react'

export class Documents extends Component {
    render() {
        return (
            <div className="downloads">
                <div>
                    <a href="documents/resume.pdf" download="Resume-AungKhant (Derrick)">
                    <i class="mr-4 fas fa-file-download fa-2x"></i>
                    Resume
                    </a>
                </div>
                <div>
                    <a href="documents/academic_trascript.pdf" download="Transcript-AungKhant (Derrick)">
                    <i class="mr-4 fas fa-file-alt fa-2x"></i>
                    Academic Transcript
                    </a>
                </div>
            </div>
        )
    }
}

export default Documents

