import styled from 'styled-components'

function IndividualInfo({ selectedRep, selectedSen }) {
  console.log(selectedSen)

  return (
    <>
      {selectedSen.length ? (
        <Information>
          <Name>
            {selectedSen[0].short_title} {selectedSen[0].first_name}{' '}
            {selectedSen[0].last_name}{' '}
            <span>
              <small>
                ({selectedSen[0].party}) {selectedSen[0].state}
              </small>
            </span>
          </Name>
          <p>
            {selectedSen[0].leadership_role ? (
              <h1>{selectedSen[0].leadership_role}</h1>
            ) : null}
          </p>
          <b>Phone: {selectedSen[0].phone}</b><br />
          <p>
            <b>Contact Form: </b>
            <Link href={selectedSen[0].contact_form} target="_blank">
              Email {selectedSen[0].short_title} {selectedSen[0].first_name}{' '}
              {selectedSen[0].last_name}{' '}
            </Link>
          </p>
          <b>Mailing Address:</b><br />
          <b>{selectedSen[0].short_title} {selectedSen[0].first_name} {selectedSen[0].last_name}</b>
          <address>
            {selectedSen[0].office}<br />
            Washington DC, 20510
          </address>
          <br />
          <Link href={selectedSen[0].url} target="_blank">
Visit           </Link>
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
            <Link href={`https://facebook.com/${selectedSen[0].facebook_account}`}>
              <i aria-hidden="true" class="facebook huge link icon">
                {' '}
              </i>{' '}
            </Link>
            <Link href={`https://twitter.com/${selectedSen[0].twitter_account}`}>
              {' '}
              <i aria-hidden="true" class="twitter huge link icon"></i>
            </Link>
            <Link href={`https://youtube.com/${selectedSen[0].youtube_account}`}>
              {' '}
              <i aria-hidden="true" class="youtube square huge link icon"></i>
            </Link>
          </div>
        </Information>
      ) : null}
      {selectedRep.length ? (
        <Information>
          <Name>
            {selectedRep[0].short_title} {selectedRep[0].first_name}{' '}
            {selectedRep[0].last_name}{' '}
            <span>
              <small>
                ({selectedRep[0].party}) {selectedRep[0].state}
              </small>
            </span>
          </Name>
          <p>
            {selectedRep[0].leadership_role ? (
              <h4>{selectedRep[0].leadership_role}</h4>
            ) : null}
          </p>
          <p>Phone: {selectedRep[0].phone}</p>
          <p>
            Contact Form:{' '}
            <Link href={selectedRep[0].contact_form} target="_blank">
              Email {selectedRep[0].short_title} {selectedRep[0].first_name}{' '}
              {selectedRep[0].last_name}{' '}
            </Link>
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
          <br />
          <Link href={selectedRep[0].url} target="_blank">
            Visit your Congressperson's website
          </Link>
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
            <Link href={`https://facebook.com/${selectedRep[0].facebook_account}`}>
              <i aria-hidden="true" class="facebook link icon">
                {' '}
              </i>{' '}
            </Link>

            <Link href={`https://twitter.com/${selectedRep[0].twitter_account}`}>
              {' '}
              <i aria-hidden="true" class="twitter link icon"></i>
            </Link>
          </div>
        </Information>
      ) : null}
    </>
  )
}

export default IndividualInfo

const Name = styled.h3`
  font-size: 3em;
`

const Information = styled.div`
  font-size: 1.5em;
`
const Link = styled.a`
    color: #b31942;
    &:hover {
        color: #ffffff
    }
`