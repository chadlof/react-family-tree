import FamilyMemberPage from '../../../components/WOMarriageAndChild'


const info = {
  
    familyMember: {
        name: 'Wyatt J Smasal    ',
        birthDate: '10/28/2015 '
    }
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

