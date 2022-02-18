function IndividualInfo({ selectedRep, selectedSen }) {
  console.log(selectedSen)

  return (
    <>
      {selectedSen.length ? (
        <div>
          <h3>
            {selectedSen[0].short_title} {selectedSen[0].first_name}{' '}
            {selectedSen[0].last_name}{' '}
            <span>
              <small>
                ({selectedSen[0].party}) {selectedSen[0].state}
              </small>
            </span>
          </h3>
          <p>
            {selectedSen[0].leadership_role ? (
              <h4>{selectedSen[0].leadership_role}</h4>
            ) : null}
          </p>
          <p>Phone: {selectedSen[0].phone}</p>
          <p>
            Contact Form:{' '}
            <a href={selectedSen[0].contact_form} target="_blank">
              Email {selectedSen[0].short_title} {selectedSen[0].first_name}{' '}
              {selectedSen[0].last_name}{' '}
            </a>
          </p>
          <b>Mailing Address:</b>
          <address>
            {' '}
            {selectedSen[0].short_title} {selectedSen[0].first_name}{' '}
            {selectedSen[0].last_name}
            <br />
            {selectedSen[0].office}
            <br />
            Washington DC, 20510
          </address>
          <a href={selectedSen[0].url} target="_blank">
            Website
          </a>
          <br />
          <h3>
            <b>Voting History:</b>
          </h3>
          <p>
            <b>All Votes: </b>
            {selectedSen[0].total_votes}
            <br />
            <b>Votes with party percentage: </b>{' '}
            {selectedSen[0].votes_with_party_pct}
            <br />
            <b>Votes against party percentage: </b>{' '}
            {selectedSen[0].votes_against_party_pct}
          </p>
          <br />
          <div>
            <a href={`https://facebook.com/${selectedSen[0].facebook_account}`}>
              <i aria-hidden="true" class="facebook link icon">
                {' '}
              </i>{' '}
            </a>

            <a href={`https://twitter.com/${selectedSen[0].twitter_account}`}>
              {' '}
              <i aria-hidden="true" class="twitter link icon"></i>
            </a>
          </div>
          social medias
          <h5> </h5>
        </div>
      ) : null}
      {selectedRep.length ? (
        <div>
          <h3>
            {selectedRep[0].short_title} {selectedRep[0].first_name}{' '}
            {selectedRep[0].last_name}{' '}
            <span>
              <small>
                ({selectedRep[0].party}) {selectedRep[0].state}
              </small>
            </span>
          </h3>
          <p>
            {selectedRep[0].leadership_role ? (
              <h4>{selectedRep[0].leadership_role}</h4>
            ) : null}
          </p>
          <p>Phone: {selectedRep[0].phone}</p>
          <p>
            Contact Form:{' '}
            <a href={selectedRep[0].contact_form} target="_blank">
              Email {selectedRep[0].short_title} {selectedRep[0].first_name}{' '}
              {selectedRep[0].last_name}{' '}
            </a>
          </p>
          <b>Mailing Address:</b>
          <address>
            {' '}
            {selectedRep[0].short_title} {selectedRep[0].first_name}{' '}
            {selectedRep[0].last_name}
            <br />
            {selectedRep[0].office}
            <br />
            Washington DC, 20510
          </address>
          <a href={selectedRep[0].url} target="_blank">
            Website
          </a>
          <br />
          <h3>
            <b>Voting History:</b>
          </h3>
          <p>
            <b>All Votes: </b>
            {selectedRep[0].total_votes}
            <br />
            <b>Votes with party percentage: </b>{' '}
            {selectedRep[0].votes_with_party_pct}
            <br />
            <b>Votes against party percentage: </b>{' '}
            {selectedRep[0].votes_against_party_pct}
          </p>
          <br />
          <div>
            <a href={`https://facebook.com/${selectedRep[0].facebook_account}`}>
              <i aria-hidden="true" class="facebook link icon">
                {' '}
              </i>{' '}
            </a>

            <a href={`https://twitter.com/${selectedRep[0].twitter_account}`}>
              {' '}
              <i aria-hidden="true" class="twitter link icon"></i>
            </a>
          </div>
          social medias
          <h5> </h5>
        </div>
      ) : null}
    </>
  )
}

export default IndividualInfo
