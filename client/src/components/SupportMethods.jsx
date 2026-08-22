import React, { useState } from 'react'
import { Copy, Check, ExternalLink } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SUPPORT_METHODS } from '../data/supportMethods'
import Card from './Card'

function CopyField({ label, value }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard denied
    }
  }

  if (!value) return null

  return (
    <button
      onClick={handleCopy}
      className="flex w-full items-center justify-between border border-white/10 bg-white/[0.03] px-4 py-3 text-left transition-colors hover:border-teal-400/50"
    >
      <span>
        <span className="block text-xs uppercase tracking-widest text-white/50">{label}</span>
        <span className="text-white">{value}</span>
      </span>
      {copied ? <Check className="h-4 w-4 text-teal-300" /> : <Copy className="h-4 w-4 text-white/50" />}
    </button>
  )
}

const MPESA_VARIANTS = [
  {
    key: 'mpesaTill',
    fields: [
      { label: 'Till Number', field: 'till' },
      { label: 'Account Number', field: 'accountNumber' },
    ],
  },
  {
    key: 'mpesaPayBill',
    fields: [
      { label: 'Business Name', field: 'BusinessName' },
      { label: 'Account Number', field: 'accountNumber' },
    ],
  },
  {
    key: 'mpesaSendMoney',
    fields: [
      { label: 'Name', field: 'name' },
      { label: 'Number', field: 'number' },
    ],
  },
]

export default function SupportMethods() {
  const methods = Object.values(SUPPORT_METHODS).filter((m) => m.enabled)

  if (methods.length === 0) {
    return (
      <Card variant='cool' className="border border-white/10 bg-white/[0.04] p-6 md:p-10 text-center">
        <p className="font-display text-3xl md:text-4xl font-bold leading-tight">
          Ways to give are coming soon
        </p>
        <p className="mt-3 text-white/70">
          In the meantime, reach us on{' '}
          <Link to="/contact" className="underline text-teal-300 font-bold hover:text-white transition-colors">
            our Contact page
          </Link>{' '}
          and we'll walk you through it directly.
        </p>
      </Card>
    )
  }
const image='/heroBg/bg.webp'
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 z-10 ">
            <div
            className="absolute inset-0 bg-cover bg-center opacity-50 "
            style={{ backgroundImage: `url(${image})` }}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-[#04211E] via-[#04211E]/70 to-[#04211E]/40" />
        

      {MPESA_VARIANTS.map(({ key, fields }) => {
        const data = SUPPORT_METHODS[key]
        if (!data?.enabled) return null

        return (
          <Card key={key} variant="cool" className=" z-10 p-6">
            <h3 className="font-display text-xl font-bold uppercase mb-4">{data.label}</h3>
            <div className="flex flex-col gap-2">
              {fields.map(({ label, field }) => (
                <CopyField key={field} label={label} value={data[field]} />
              ))}
            </div>
            {data.instructions && (
              <p className="mt-4 text-sm text-white/70">{data.instructions}</p>
            )}
          </Card>
        )
      })}

      {SUPPORT_METHODS.bank.enabled && (
        <Card variant="soft" className=" z-10 p-6">
          <h3 className="font-display text-xl font-bold uppercase mb-4">{SUPPORT_METHODS.bank.label}</h3>
          <div className="flex flex-col gap-2">
            <CopyField label="Bank" value={SUPPORT_METHODS.bank.bankName} />
            <CopyField label="Account Name" value={SUPPORT_METHODS.bank.accountName} />
            <CopyField label="Account Number" value={SUPPORT_METHODS.bank.accountNumber} />
            <CopyField label="Branch" value={SUPPORT_METHODS.bank.branch} />
          </div>
        </Card>
      )}

      {SUPPORT_METHODS.paypal.enabled && (
        <Card variant="soft" className=" z-10 p-6">
          <h3 className="font-display text-xl font-bold uppercase mb-4">{SUPPORT_METHODS.paypal.label}</h3>
          <a
            href={SUPPORT_METHODS.paypal.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-teal-300 font-bold hover:text-white transition-colors"
          >
            Donate via PayPal <ExternalLink className="h-4 w-4" />
          </a>
        </Card>
      )}

      {SUPPORT_METHODS.card.enabled && (
        <Card variant="soft" className=" z-10 p-6">
          <h3 className="font-display text-xl font-bold uppercase mb-4">{SUPPORT_METHODS.card.label}</h3>
          <a
            href={SUPPORT_METHODS.card.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-teal-300 font-bold hover:text-white transition-colors"
          >
            Pay by card <ExternalLink className="h-4 w-4" />
          </a>
        </Card>
      )}

      {SUPPORT_METHODS.whatsapp.enabled && (
        <Card variant="cool" className=" z-10 p-6">
          <h3 className="font-display text-xl font-bold uppercase mb-4">{SUPPORT_METHODS.whatsapp.label}</h3>
          <a
            href={`https://wa.me/${SUPPORT_METHODS.whatsapp.number.replace(/\D/g, '')}?text=${encodeURIComponent(SUPPORT_METHODS.whatsapp.message)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-ink-50 font-bold px-4 py-2.5 hover:bg-[#128C7E] transition-colors"
          >
            <FaWhatsapp size={18} /> Message us on WhatsApp
          </a>
        </Card>
      )}

    </div>
  )
}