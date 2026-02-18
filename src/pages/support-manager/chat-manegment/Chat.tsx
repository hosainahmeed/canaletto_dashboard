import { useState } from 'react'
import { PageContent, PageLayout } from '../../../components/shared/PageLayout'
import ChatFormalCard from './ChatFormalCard'
import { ChatMessages } from './ChatMessages'
import { ChatInput } from './ChatInput'
import { ChatSidebar } from './ChatSidebar'

interface Message {
  id: number
  text: string
  sender: 'me' | 'other'
  time: string
}

const initialMessages: Message[] = [
  { id: 1, text: "I have a question regarding the handover timeline.", sender: "other", time: "04:45 PM" },
  { id: 2, text: "Yes, all clear! I've been working on the stretches you showed me.", sender: "me", time: "04:45 PM" },
  { id: 3, text: "I'm glad to hear that! See you tomorrow at the meeting!", sender: "other", time: "04:45 PM" },
];

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState<string>('')

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    const newMsg: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMsg]);
    setInputValue('');
  };

  return (
    <PageLayout title='Support Chat'>
      <PageContent>
        <div className='flex flex-col lg:flex-row gap-6 lg:gap-10'>
         
          <div className="w-full lg:w-1/4">
            <div className="bg-white border rounded-lg p-4">
              <ChatSidebar/>
            </div>
          </div>

         
          <div className="flex-1">
            <ChatFormalCard
              name="Rakib Hasan"
              avater="https://api.dicebear.com/7.x/avataaars/svg?seed=Rakib"
              status="Active"
              bodyStyle="bg-white min-h-[600px] flex flex-col"
            >
              <div className="flex flex-col h-full justify-between">
                <ChatMessages messages={messages} />
                <ChatInput 
                  value={inputValue} 
                  onChange={setInputValue} 
                  onSend={handleSend} 
                />
              </div>
            </ChatFormalCard>
          </div>
        </div>
      </PageContent>
    </PageLayout>
  )
}