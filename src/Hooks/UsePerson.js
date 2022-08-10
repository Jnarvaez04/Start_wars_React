import React from 'react'

export const UsePerson = () => {

    const getallPerson = () => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://swapi.dev/api/people", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

  return {
    getallPerson
  };
}
