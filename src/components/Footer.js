import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';

export default function Footer(props) {

    let styles = {
      fontSize: '2em',
      color: 'black',
      marginLeft: '.9rem'
    }

    return (
      <div style={props.myStyle}>
        <footer className="footer mt-auto py-3 bg">
          <div className="container text-center">
            <span role="img" aria-label="author" className="text-muted">
              Made with ❤️ by Parin Vaghani.
              <a style={styles} href="https://github.com/parin-prog/TextUtils">
                <AiOutlineGithub />
              </a>
            </span>
          </div>
        </footer>
      </div>
    );
  }

