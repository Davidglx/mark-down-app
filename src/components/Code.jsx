import { useContext, useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ThemeContext } from '../App';
import { Copyicons, Pasteicon } from './assets/Icons';
import CopyToClipboard from 'react-copy-to-clipboard';


const Code = ({ children, language }) => {
  const [copied, setCopied]  = useState(false);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000) 
    return () => clearTimeout(timer)
  }, [copied])

  return (
    <div className="code">
       <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
        <button className='icon copy-icon'>
          {copied ? <Pasteicon /> : <Copyicons />}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter
            language={language}
            style={isDark ? materialDark : materialLight}
            >
                {children}
            </SyntaxHighlighter>
    </div>
  )
}

export default Code;

