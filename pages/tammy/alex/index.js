import FamilyMemberPage from '../../components/WOMarriageAndChild'


const info = {
  
    familyMember: {
        name: 'Alexander Robert Doege',
        birthDate: 'February 11, 1999'
    },

}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

