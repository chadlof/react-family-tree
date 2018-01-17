import FamilyMemberPage from '../../../components/WOMarriageAndChild'


const info = {
  
    familyMember: {
        name: 'Derek Michael Calixto       ',
        birthDate: 'February 22, 2009 '
    }
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

