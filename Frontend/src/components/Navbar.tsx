import { motion } from 'framer-motion';
import { Activity, Wallet } from 'lucide-react';

interface NavbarProps {
  currentRound: number;
  walletAddress: string | null;
  onConnect: () => void;
}

export function Navbar({ currentRound, walletAddress, onConnect }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400  rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r text-white text-transparent">
                MedFed
              </h1>
              <p className="text-xs text-gray-400">Decentralized Federated Medical AI</p>
            </div>
          </motion.div>

          <div className="flex items-center space-x-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground font-mono">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="hover:text-primary/4001 text-md transition-colors">Network Active</span>
              </div>

              <div className="px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/30">
                <span className="hover:text-primary text-md transition-colors">Round #{currentRound}</span>
              </div>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onConnect}
              className={`flex items-center space-x-2 px-6 py-2 rounded-lg font-medium transition-all ${
                walletAddress
                  ? 'bg-primary/100'
                  : 'bg-white/10 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20'
              }`}
            >
              <Wallet className="w-4 h-4" />
              <span>{walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}</span>
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
}
