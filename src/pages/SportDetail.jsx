
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Trophy, Users, Award, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const SportDetail = () => {
  const { id } = useParams();
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const sportsData = {
    1: {
      name: 'Basketball',
      season: 'Fall/Winter',
      teams: 'Men\'s & Women\'s',
      image: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a26',
      description: 'Our basketball program has a rich tradition of excellence, with both men\'s and women\'s teams competing at the highest level in our conference. Our student-athletes excel both on the court and in the classroom.',
      achievements: [
        'Conference Champions 2023',
        '5 All-Conference Selections',
        '3.5 Team GPA Average',
      ],
      coaches: [
        { name: 'Coach Sarah Johnson', role: 'Head Coach - Women\'s', email: 's.johnson@responsabcollege.edu' },
        { name: 'Coach Michael Davis', role: 'Head Coach - Men\'s', email: 'm.davis@responsabcollege.edu' },
      ],
      players: [
        { name: 'Alex Johnson', position: 'Point Guard', number: '5', class: 'Senior', degree: 'Business Administration', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200', bio: 'Alex is a senior point guard majoring in Business Administration. He has been a key player for the team for the past three seasons, leading the team in assists and maintaining an impressive 3.8 GPA. Alex plans to pursue a career in sports management after graduation.', stats: '12.5 PPG, 8.2 APG, 3.1 RPG' },
        { name: 'Sarah Martinez', position: 'Forward', number: '12', class: 'Junior', degree: 'Computer Science', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200', bio: 'Sarah is a junior forward studying Computer Science. She is a two-time All-Conference selection and has been instrumental in the team\'s success. Sarah balances her athletic commitments with her rigorous academic schedule, maintaining a 3.9 GPA.', stats: '15.3 PPG, 7.8 RPG, 2.1 APG' },
        { name: 'Michael Chen', position: 'Center', number: '23', class: 'Sophomore', degree: 'Engineering', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200', bio: 'Michael is a sophomore center majoring in Engineering. Despite being in his second year, he has already made a significant impact on the team. Michael\'s dedication to both athletics and academics exemplifies the student-athlete experience at ResponsabCollege.', stats: '10.2 PPG, 9.5 RPG, 1.8 BPG' },
        { name: 'Emily Rodriguez', position: 'Guard', number: '8', class: 'Senior', degree: 'Psychology', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200', bio: 'Emily is a senior guard majoring in Psychology. She has been a team captain for the past two seasons and is known for her leadership both on and off the court. Emily plans to pursue graduate studies in sports psychology.', stats: '11.8 PPG, 4.2 APG, 3.5 RPG' },
        { name: 'James Wilson', position: 'Forward', number: '15', class: 'Junior', degree: 'Marketing', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200', bio: 'James is a junior forward studying Marketing. He brings energy and athleticism to the team every game. James is actively involved in campus life and serves as a student ambassador for the athletics department.', stats: '9.5 PPG, 6.3 RPG, 2.0 APG' },
        { name: 'Jessica Lee', position: 'Guard', number: '3', class: 'Sophomore', degree: 'Biology', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200', bio: 'Jessica is a sophomore guard majoring in Biology. She is a rising star on the team, known for her quickness and defensive prowess. Jessica aspires to attend medical school after completing her undergraduate degree.', stats: '8.9 PPG, 3.1 APG, 2.8 SPG' },
        { name: 'David Thompson', position: 'Center', number: '42', class: 'Senior', degree: 'Finance', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200', bio: 'David is a senior center majoring in Finance. He has been a consistent contributor throughout his college career and is respected by teammates for his work ethic and dedication. David has accepted a position with a major financial firm upon graduation.', stats: '7.2 PPG, 8.1 RPG, 1.5 BPG' },
        { name: 'Maria Garcia', position: 'Forward', number: '21', class: 'Freshman', degree: 'Communications', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200', bio: 'Maria is a freshman forward studying Communications. She has shown great promise in her first season and is quickly adapting to the college game. Maria is excited about her academic and athletic journey at ResponsabCollege.', stats: '6.8 PPG, 5.2 RPG, 1.3 APG' },
        { name: 'Ryan Brown', position: 'Guard', number: '11', class: 'Junior', degree: 'History', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200', bio: 'Ryan is a junior guard majoring in History. He is known for his basketball IQ and ability to make plays in crucial moments. Ryan is considering pursuing a master\'s degree in education to become a teacher and coach.', stats: '9.1 PPG, 4.5 APG, 2.9 RPG' },
        { name: 'Lisa Anderson', position: 'Guard', number: '7', class: 'Senior', degree: 'Political Science', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200', bio: 'Lisa is a senior guard majoring in Political Science. She has been a key contributor for four years and is known for her clutch shooting. Lisa plans to attend law school after graduation and is interested in sports law.', stats: '13.2 PPG, 3.8 APG, 3.2 RPG' },
        { name: 'Chris Taylor', position: 'Forward', number: '33', class: 'Sophomore', degree: 'Chemistry', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200', bio: 'Chris is a sophomore forward studying Chemistry. He balances his demanding science courses with his athletic commitments, demonstrating exceptional time management skills. Chris is exploring research opportunities in the chemistry department.', stats: '7.5 PPG, 6.8 RPG, 1.9 APG' },
        { name: 'Amy White', position: 'Center', number: '50', class: 'Junior', degree: 'Nursing', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200', bio: 'Amy is a junior center majoring in Nursing. She brings a strong work ethic and positive attitude to the team. Amy is passionate about healthcare and looks forward to making a difference in patient care after graduation.', stats: '8.3 PPG, 7.9 RPG, 1.4 BPG' },
      ],
    },
    2: {
      name: 'Soccer',
      season: 'Fall',
      teams: 'Men\'s & Women\'s',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211',
      description: 'ResponsabCollege soccer teams compete in one of the most competitive conferences, with a focus on developing well-rounded student-athletes who succeed both on and off the field.',
      achievements: [
        'Regional Finalists 2023',
        '8 All-Conference Selections',
        '95% Graduation Rate',
      ],
      coaches: [
        { name: 'Coach Emily Rodriguez', role: 'Head Coach - Women\'s', email: 'e.rodriguez@responsabcollege.edu' },
        { name: 'Coach David Thompson', role: 'Head Coach - Men\'s', email: 'd.thompson@responsabcollege.edu' },
      ],
      players: [
        { name: 'Jordan Smith', position: 'Goalkeeper', number: '1', class: 'Senior', degree: 'International Business', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200', bio: 'Jordan is a senior goalkeeper majoring in International Business. Known for incredible saves and leadership, Jordan has been a cornerstone of the team\'s defense for four years.', stats: '0.85 GAA, 8 Shutouts' },
        { name: 'Sofia Martinez', position: 'Midfielder', number: '10', class: 'Junior', degree: 'Environmental Science', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200', bio: 'Sofia is a junior midfielder studying Environmental Science. She leads the team in assists and is passionate about sustainability both on and off the field.', stats: '12 Goals, 18 Assists' },
        { name: 'Ethan Davis', position: 'Forward', number: '9', class: 'Sophomore', degree: 'Sports Management', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200', bio: 'Ethan is a sophomore forward majoring in Sports Management. He has quickly become one of the team\'s top scorers and is learning about the business side of athletics.', stats: '15 Goals, 7 Assists' },
        { name: 'Olivia Chen', position: 'Defender', number: '4', class: 'Senior', degree: 'Mathematics', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200', bio: 'Olivia is a senior defender majoring in Mathematics. Her analytical mind helps her read the game exceptionally well, making her a defensive stalwart.', stats: '2 Goals, 5 Assists' },
        { name: 'Noah Johnson', position: 'Midfielder', number: '8', class: 'Junior', degree: 'Mechanical Engineering', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200', bio: 'Noah is a junior midfielder studying Mechanical Engineering. He balances his rigorous coursework with his athletic commitments, excelling in both areas.', stats: '8 Goals, 14 Assists' },
        { name: 'Emma Wilson', position: 'Forward', number: '11', class: 'Freshman', degree: 'Communications', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200', bio: 'Emma is a freshman forward studying Communications. She has made an immediate impact in her first season, showing great potential for the future.', stats: '9 Goals, 4 Assists' },
        { name: 'Lucas Brown', position: 'Defender', number: '5', class: 'Senior', degree: 'Education', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200', bio: 'Lucas is a senior defender majoring in Education. He plans to become a teacher and coach after graduation, sharing his passion for the game with future generations.', stats: '1 Goal, 3 Assists' },
        { name: 'Isabella Garcia', position: 'Midfielder', number: '6', class: 'Sophomore', degree: 'Biology', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200', bio: 'Isabella is a sophomore midfielder studying Biology. She is interested in sports medicine and is considering pursuing a career in athletic training.', stats: '6 Goals, 10 Assists' },
        { name: 'Mason Taylor', position: 'Goalkeeper', number: '22', class: 'Junior', degree: 'Psychology', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200', bio: 'Mason is a junior goalkeeper majoring in Psychology. He uses his understanding of human behavior to read opponents and anticipate their moves.', stats: '0.92 GAA, 6 Shutouts' },
        { name: 'Ava White', position: 'Forward', number: '7', class: 'Senior', degree: 'Graphic Design', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200', bio: 'Ava is a senior forward studying Graphic Design. She combines her creative talents with her athletic skills, often designing team materials and graphics.', stats: '13 Goals, 9 Assists' },
        { name: 'Carter Moore', position: 'Defender', number: '3', class: 'Sophomore', degree: 'Computer Science', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200', bio: 'Carter is a sophomore defender majoring in Computer Science. He brings a technical mindset to the field and is developing apps for sports analytics.', stats: '3 Goals, 4 Assists' },
        { name: 'Grace Lee', position: 'Midfielder', number: '14', class: 'Freshman', degree: 'Business Administration', image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200', bio: 'Grace is a freshman midfielder studying Business Administration. She is adjusting well to college life and is excited about her future both academically and athletically.', stats: '5 Goals, 6 Assists' },
      ],
    },
  };

  const sport = sportsData[id] || sportsData[1];

  return (
    <>
      <Helmet>
        <title>{sport.name} - ResponsabCollege Athletics</title>
        <meta name="description" content={`Learn about ResponsabCollege ${sport.name} program, schedules, and achievements.`} />
      </Helmet>

      <div className="bg-white min-h-screen">
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" alt={`${sport.name} team`} src={sport.image} />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-orange-700/80"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link to="/athletics" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Athletics
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{sport.name}</h1>
              <p className="text-xl text-orange-100">{sport.season} • {sport.teams}</p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About {sport.name}</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">{sport.description}</p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Recent Achievements</h3>
                <div className="space-y-3 mb-8">
                  {sport.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                      <Trophy className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-900">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-xl p-8 text-white sticky top-24">
                  <h3 className="text-2xl font-bold mb-6">Coaching Staff</h3>
                  <div className="space-y-6">
                    {sport.coaches.map((coach, index) => (
                      <div key={index} className="border-t border-blue-400/30 pt-4 first:border-t-0 first:pt-0">
                        <p className="font-semibold text-lg mb-1">{coach.name}</p>
                        <p className="text-blue-100 text-sm mb-2">{coach.role}</p>
                        <a href={`mailto:${coach.email}`} className="text-blue-200 hover:text-white text-sm">{coach.email}</a>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-8 bg-white text-blue-600 hover:bg-blue-50">
                    Contact Coaching Staff
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Players</h2>
              <p className="text-xl text-gray-600">Outstanding student-athletes representing ResponsabCollege</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sport.players.slice(0, 12).map((player, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedPlayer(player)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img src={player.image} alt={`${player.name} - ${sport.name} player`} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 bg-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-blue-600 text-lg">
                      #{player.number}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{player.name}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{player.position}</p>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p><span className="font-medium">Class:</span> {player.class}</p>
                      <p><span className="font-medium">Degree:</span> {player.degree}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Dialog open={!!selectedPlayer} onOpenChange={() => setSelectedPlayer(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {selectedPlayer?.name} - #{selectedPlayer?.number}
              </DialogTitle>
            </DialogHeader>
            {selectedPlayer && (
              <div className="space-y-4">
                <div className="flex gap-6">
                  <img src={selectedPlayer.image} alt={selectedPlayer.name} className="w-32 h-32 rounded-lg object-cover" />
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-blue-600 mb-2">{selectedPlayer.position}</p>
                    <p className="text-gray-700 mb-1"><span className="font-medium">Class:</span> {selectedPlayer.class}</p>
                    <p className="text-gray-700 mb-1"><span className="font-medium">Degree:</span> {selectedPlayer.degree}</p>
                    {selectedPlayer.stats && (
                      <p className="text-gray-700 mt-3"><span className="font-medium">Stats:</span> {selectedPlayer.stats}</p>
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Bio</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedPlayer.bio}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default SportDetail;
