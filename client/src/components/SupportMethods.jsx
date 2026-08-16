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
      // clipboard denied — value is already visible as text, safe fallback
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

export default function SupportMethods() {
  const methods = Object.values(SUPPORT_METHODS).filter((m) => m.enabled)

  if (methods.length === 0) {
    return (
      <Card className="border border-white/10 bg-white/[0.04] p-6 md:p-10 text-center">
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {SUPPORT_METHODS.mpesa.enabled && (
        <Card variant="soft" className="p-6">
          <h3 className="font-display text-xl font-bold uppercase mb-4">M-Pesa</h3>
          <div className="flex flex-col gap-2">
            <CopyField label="Till Number" value={SUPPORT_METHODS.mpesa.till} />
            <CopyField label="Paybill" value={SUPPORT_METHODS.mpesa.paybill} />
            <CopyField label="Account Number" value={SUPPORT_METHODS.mpesa.accountNumber} />
          </div>
          <p className="mt-4 text-sm text-white/70">{SUPPORT_METHODS.mpesa.instructions}</p>
        </Card>
      )}

      {SUPPORT_METHODS.bank.enabled && (
        <Card variant="soft" className="p-6">
          <h3 className="font-display text-xl font-bold uppercase mb-4">Bank Transfer</h3>
          <div className="flex flex-col gap-2">
            <CopyField label="Bank" value={SUPPORT_METHODS.bank.bankName} />
            <CopyField label="Account Name" value={SUPPORT_METHODS.bank.accountName} />
            <CopyField label="Account Number" value={SUPPORT_METHODS.bank.accountNumber} />
            <CopyField label="Branch" value={SUPPORT_METHODS.bank.branch} />
          </div>
        </Card>
      )}

      {SUPPORT_METHODS.paypal.enabled && (
        <Card variant="soft" className="p-6">
          <h3 className="font-display text-xl font-bold uppercase mb-4">PayPal</h3>
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
        <Card variant="soft" className="p-6">
          <h3 className="font-display text-xl font-bold uppercase mb-4">Card Payment</h3>
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
        <Card variant="cool" className="p-6">
          <h3 className="font-display text-xl font-bold uppercase mb-4">Prefer to talk it through?</h3>
          <a
            href={`https://wa.me/${SUPPORT_METHODS.whatsapp.number}?text=${encodeURIComponent(SUPPORT_METHODS.whatsapp.message)}`}
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