import styled from 'styled-components'

function IndividualInfo({ selectedCon }) {
  console.log(selectedCon[0])
  return (
    <>
      <Information>
        <Name>
          {selectedCon[0].short_title} {selectedCon[0].first_name}{' '}
          {selectedCon[0].last_name}{' '}
          <span>
            <small>
              ({selectedCon[0].party}) {selectedCon[0].state}
            </small>
          </span>
        </Name>

        {selectedCon[0].leadership_role ? (
          <h3>{selectedCon[0].leadership_role}</h3>
        ) : null}

        <b>Phone: {selectedCon[0].phone}</b>
        <br />
        <p>
          <b>Contact Form: </b>
          <Link href={selectedCon[0].contact_form} target="_blank">
            Email {selectedCon[0].short_title} {selectedCon[0].first_name}{' '}
            {selectedCon[0].last_name}{' '}
          </Link>
        </p>
        <b>Mailing Address:</b>
        <br />
        <b>
          {selectedCon[0].short_title} {selectedCon[0].first_name}{' '}
          {selectedCon[0].last_name}
        </b>
        <address>
          {selectedCon[0].office}
          <br />
          Washington DC, 20510
        </address>
        <br />
        <Link href={selectedCon[0].url} target="_blank">
          Visit{' '}
        </Link>
        <br />
        <h3>
          <b>Voting History:</b>
        </h3>
        <p>
          <b>All Votes: </b>
          {selectedCon[0].total_votes}
          <br />
          <b>Votes with party percentage: </b>{' '}
          {selectedCon[0].votes_with_party_pct}
          <br />
          <b>Votes against party percentage: </b>{' '}
          {selectedCon[0].votes_against_party_pct}
        </p>
        <br />
        <div>
          <Link
            href={`https://facebook.com/${selectedCon[0].facebook_account}`}
          >
            <i aria-hidden="true" className="facebook huge link icon">
              {' '}
            </i>{' '}
          </Link>
          <Link href={`https://twitter.com/${selectedCon[0].twitter_account}`}>
            {' '}
            <i aria-hidden="true" className="twitter huge link icon"></i>
          </Link>
          <Link href={`https://youtube.com/${selectedCon[0].youtube_account}`}>
            {' '}
            <i aria-hidden="true" className="youtube square huge link icon"></i>
          </Link>
        </div>
      </Information>
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
  color: #fff;
  &:hover {
    color: #0a3161;
    background: linear-gradient(to right, #b31942, #fff, #b31942);
  }
`
