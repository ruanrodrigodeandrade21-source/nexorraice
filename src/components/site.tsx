import { Link, useRouterState } from '@tanstack/react-router';
import { useState, type ReactNode } from 'react';
import { ArrowUpRight, ArrowRight, Menu, X, Workflow, MessageSquare, CalendarDays, ChartNoAxesCombined, Network, FileText, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const nav = [{ to: '/solucoes', label: 'Soluções' }, { to: '/metodo', label: 'Como funciona' }, { to: '/planos', label: 'Planos' }] as const;
export function Brand() { return <Link to="/" className="brand" aria-label="Nexo Automação — início"><Workflow /><span>nexo<span className="brand-dot">.</span></span><small>AUTOMAÇÃO & IA</small></Link>; }
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: s => s.location.pathname });
  return <header className="site-header"><div className="site-width header-inner"><Brand /><nav className="desktop-nav" aria-label="Principal">{nav.map(n => <Link key={n.to} to={n.to} className={pathname === n.to ? 'nav-link active' : 'nav-link'}>{n.label}</Link>)}</nav><Button asChild className="header-cta"><Link to="/contato">Vamos conversar <ArrowUpRight /></Link></Button><Button variant="ghost" size="icon" className="mobile-menu" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div>{open && <nav className="mobile-nav" aria-label="Menu móvel">{nav.map(n => <Link key={n.to} to={n.to} onClick={() => setOpen(false)}>{n.label}</Link>)}<Link to="/contato" onClick={() => setOpen(false)}>Vamos conversar <ArrowUpRight /></Link></nav>}</header>;
}
export function SiteFooter() { return <footer className="site-footer"><div className="site-width footer-top"><Brand /><p>Inteligência aplicada.<br />Processos que fazem sentido.</p><Button asChild variant="outline"><Link to="/contato">Comece uma conversa <ArrowUpRight /></Link></Button></div><div className="site-width footer-bottom"><span>© 2026 Nexo Automação. Marca provisória.</span><span>Feito para conectar negócios em todo o Brasil.</span></div></footer>; }
export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) { return <section className="page-intro site-width"><span className="eyebrow"><span />{eyebrow}</span><h1>{title}</h1><p>{text}</p></section>; }
export function CtaBand() { return <section className="cta-band"><div className="site-width cta-inner"><div><span className="eyebrow">O PRÓXIMO PASSO</span><h2>Seu negócio pode<br />operar de outro jeito.</h2></div><div><p>Vamos encontrar o processo certo para começar.</p><Button asChild size="lg"><Link to="/contato">Quero automatizar meu negócio <ArrowUpRight /></Link></Button></div></div></section>; }
const icons = { message: MessageSquare, calendar: CalendarDays, chart: ChartNoAxesCombined, network: Network, document: FileText, spark: Sparkles };
export function ServiceIcon({ name }: { name: string }) { const Icon = icons[name as keyof typeof icons] ?? Workflow; return <Icon />; }
export function SectionHeading({ label, title, children }: { label: string; title: string; children?: ReactNode }) { return <div className="section-heading"><div><span className="eyebrow">{label}</span><h2>{title}</h2></div>{children}</div>; }
export function TextLink({ to, children }: { to: '/solucoes' | '/metodo' | '/planos' | '/contato'; children: ReactNode }) { return <Button asChild variant="link" className="text-link"><Link to={to}>{children}<ArrowRight /></Link></Button>; }