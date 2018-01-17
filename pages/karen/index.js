import FamilyMemberPage from '../components/FamilyMemberPage'


const info = {
    marriageDate: '8/24/2006',
    familyMember: {
        name: 'Karen Ann Germscheid',
        birthDate: '8/26/1958'
    },
    spouse: {
        name: 'Jerome Alan Germscheid ',
        birthDate: '8/25/1960'
    },
    children: [
        { name: 'Kevin Alan Lofgren ', href: '/karen/kevin'},
        { name: 'Kyle Aaron Bell ', href:'/karen/kyle' }
    ],
    stepChildren: [
        { name: 'David Cox', href: '/karen/david' }
    ]
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

