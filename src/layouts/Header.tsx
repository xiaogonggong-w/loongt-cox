

import logo from '@/assets/svg/LoongCoX.svg'

import MenuList from './Menu'

export default function Header() {
   

    return <div style={{
        display: 'flex',
        alignItems: 'center',
        background: '#fff',
        padding: '0 16px',
        boxShadow: '0 1px 4px rgba(0,21,41,.08)',
        height: '48px'
    }}>
        <div className='logo' style={{
            width: '200px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
        }}>
            <img src={logo} alt="logo" style={{ height: '28px', width: 'auto' }} />
        </div>
        <MenuList />
    </div>
}
